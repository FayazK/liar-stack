<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::get( '/', [ DashboardController::class, 'index' ] )->name( 'dashboard' );

Route::prefix( 'users' )->group( function() {
    Route::get( '/', [ UserController::class, 'index' ] )->name('users');
    Route::patch( '/', [ UserController::class, 'listing' ] )->name('users.list');
} );
