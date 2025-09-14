<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\KanbanController;
use Illuminate\Support\Facades\Route;

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
// header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

Route::apiResource('tasks', TaskController::class)->withoutMiddleware('auth:api');
Route::apiResource('/kanban', KanbanController::class)->withoutMiddleware('auth:api');


// Route::options('{any}', function () {
//     return response()->json([], 204)
//         ->header('Access-Control-Allow-Origin', '*')
//         ->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH')
//         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
// })->where('any', '.*');
