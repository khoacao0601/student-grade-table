<?php 

    $link = get_db_link();

    if ($request['method'] === 'GET') {
        $sqlAllStudent = "SELECT * FROM students";
        $resultAll = mysqli_query($link,$sqlAllStudent);
        $fetch_All = mysqli_fetch_all($resultAll, MYSQLI_ASSOC);
        $response['body'] = $fetch_All;
        send($response);
    }

    if ($request['method'] === 'POST') {
        $body = checkEmpty($request);
        $add = addStudent($link, $body);
        send($add);     
    }

    if ($request['method'] === "DELETE") {
        if(!isset($request['query']['studentId'])) {
             throw new ApiError("Require studentId", 400);
        } else {
            $studentID = intval($request['query']['studentId']);
            $sqlRemove = "DELETE FROM `students` WHERE `studentId` = {$studentID}";
            $removeStudent = mysqli_query($link,$sqlRemove);        
            $response['body'] = true;
            send($response);
        };
    }

    if ($request['method'] === "PATCH") {
        $body = checkEmptyUpdate($request);
        $update = update($link, $body);
        send($update);
    }

    function checkEmpty($request) {
        if(!isset($request['body']['name'])){ throw new ApiError("Require name", 400);};
        if(!isset($request['body']['course'])){ throw new ApiError("Require course", 400);};
        if(!isset($request['body']['grade'])){ throw new ApiError("Require grade", 400);};

        return [
            'course' => $request['body']['course'],
            'grade' => $request['body']['grade'],
            'name' => $request['body']['name']
        ];
    }

    function checkEmptyUpdate($request) {
        if(!isset($request['body']['studentId'])){ throw new ApiError("Require sudentID", 400);};
        if(!isset($request['body']['name'])){ throw new ApiError("Require name", 400);};
        if(!isset($request['body']['course'])){ throw new ApiError("Require course", 400);};
        if(!isset($request['body']['grade'])){ throw new ApiError("Require grade", 400);};

        return [
            'studentId' => $request['body']['studentId'],
            'course' => $request['body']['course'],
            'grade' => $request['body']['grade'],
            'name' => $request['body']['name']
        ];
    }

    function addStudent($link, $body) {
        $sql = "INSERT INTO `students` (`name`, `course`, `grade`) VALUES (?,?,?)";
        $statement = mysqli_prepare($link, $sql);
        $name = $body['name'];
        $course = $body['course'];
        $grade = $body['grade'];

        mysqli_stmt_bind_param($statement, 'ssi', $name, $course, $grade);
        mysqli_stmt_execute($statement);
        $insertId = $link->insert_id;

        $sqlNewStudent = "SELECT * FROM students WHERE studentId = {$insertId}";
        $resultNew = mysqli_query($link,$sqlNewStudent);
        $fetch_New = mysqli_fetch_all($resultNew, MYSQLI_ASSOC);
        $response['body'] = $fetch_New;
        return $response;
    }

    function update($link, $body) {
        $sql = "UPDATE students SET name=?, course=?, grade=? WHERE studentId=?";
        $statement = mysqli_prepare($link, $sql);
        $studentId = $body['studentId'];
        $name = $body['name'];
        $course = $body['course'];
        $grade = $body['grade'];

        mysqli_stmt_bind_param($statement, 'ssii', $name, $course, $grade, $studentId);
        mysqli_stmt_execute($statement);

        $sqlStudent = "SELECT * FROM students";
        $getStudent = mysqli_query($link,$sqlStudent); 
        $fetch_Student = mysqli_fetch_all($getStudent, MYSQLI_ASSOC);
        $response['body'] = $fetch_Student;
        return $response;
    }

?>