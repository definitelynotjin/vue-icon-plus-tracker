<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('tasks', function (Blueprint $table) {
    $table->id();
    $table->foreignId('board_column_id')->constrained('board_columns')->onDelete('cascade');
    $table->string('title');
    $table->text('content')->nullable();
    $table->string('priority')->nullable();
    $table->string('assignee')->nullable();
    $table->json('due_date')->nullable(); // {from: "", to: ""}
    $table->integer('order')->default(0);
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
