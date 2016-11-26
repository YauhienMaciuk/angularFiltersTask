function taskCreateLog($delegate, $log) {

    let createTask = $delegate.createTask;

    $delegate.createTask = function(items, newItem, $localStorage) {
        $log.log("Task was created " + new Date());
        return createTask(items, newItem, $localStorage);
    }

    return $delegate;
}

function taskTableSrcLog($delegate, $log, appName) {
    taskPerformLog($delegate, $log);
    taskDeleteLog($delegate, $log);
    dateleAllClosedTasksLog($delegate, $log);
    myLog($delegate, $log, appName);
    return $delegate;
}

function taskPerformLog($delegate, $log) {

    let performTask = $delegate.performTask;
    $delegate.performTask = function(items, item) {
        $log.info("Task was performed " + new Date());
        return performTask(items, item);
    }
    return $delegate;
}

function taskDeleteLog($delegate, $log) {
    let deleteTask = $delegate.deleteTask;

    $delegate.deleteTask = function(items, item) {
        $log.warn("Task was deleted " + new Date());
        return deleteTask(items, item);
    }
    return $delegate;
}

function dateleAllClosedTasksLog($delegate, $log) {
    let deleteAllClosedTasks = $delegate.deleteAllClosedTasks;

    $delegate.deleteAllClosedTasks = function(items) {
        $log.debug("All closed tasks were deleted " + new Date());
        return deleteAllClosedTasks(items);
    }
    return $delegate;
}

function myLog($delegate, $log, appName) {
    let performTask = $delegate.performTask;
    let deleteTask = $delegate.deleteTask;
    let deleteAllClosedTasks = $delegate.deleteAllClosedTasks;

    $delegate.performTask = function(items, item) {
        $log.error(appName);
        return performTask(items, item);
    }
    $delegate.deleteTask = function(items, item) {
        $log.error(appName);
        return deleteTask(items, item);
    }
    $delegate.deleteAllClosedTasks = function(items) {
        $log.error(appName);
        return deleteAllClosedTasks(items);
    }
    return $delegate;
}