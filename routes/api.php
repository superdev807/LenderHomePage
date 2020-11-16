<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TeamsController;
use App\Http\Controllers\PlayersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'auth'], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);

});

Route::group(['middleware' => 'jwt.auth'], function ($router) {

    Route::get('/teams', [TeamsController::class, 'index']);
    Route::get('/teams/{id}', [TeamsController::class, 'listPlayers']);
    Route::post('/teams', [TeamsController::class, 'store']);
    Route::put('/teams/{id}', [TeamsController::class, 'update']);

    Route::post('/players', [PlayersController::class, 'store']);
    Route::put('/players/{id}', [PlayersController::class, 'update']);
    Route::get('/players/{id}', [PlayersController::class, 'show']);
    Route::get('/players', [PlayersController::class, 'index']);

});

Auth::routes();