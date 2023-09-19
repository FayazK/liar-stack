<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::get( '/', [ DashboardController::class, 'index' ] )->name( 'dashboard' );

Route::prefix( 'roles' )->group( function() {
    Route::get( '/', [ RoleController::class, 'index' ] )->name( 'roles' );
} );

Route::prefix( 'users' )->group( function() {
    Route::get( '/', [ UserController::class, 'index' ] )->name( 'users' );
    Route::patch( '/', [ UserController::class, 'listing' ] )->name( 'users.list' );
} );
