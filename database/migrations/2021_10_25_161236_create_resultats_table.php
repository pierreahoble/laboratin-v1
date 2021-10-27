<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resultats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('analyse_id');
            $table->foreign('analyse_id')->references('id')->on('analyses');
            $table->unsignedBigInteger('categorie_id');
            $table->foreign('categorie_id')->references('id')->on('categories');
            $table->unsignedBigInteger('ligne_analyse_id');
            $table->foreign('ligne_analyse_id')->references('id')->on('ligne_analyses');
            $table->string('groupe', 100)->nullable()->default('text');
            $table->string('rhesus', 100)->nullable()->default('text');
            $table->string('tca', 100)->nullable()->default('text');
            $table->string('tp', 100)->nullable()->default('text');
            $table->string('inr', 100)->nullable()->default('text');
            $table->string('ts', 100)->nullable()->default('text');
            $table->string('crp', 100)->nullable()->default('text');
            $table->string('aghbs', 100)->nullable()->default('text');
            $table->string('tpha', 100)->nullable()->default('text');
            $table->string('vdrl', 100)->nullable()->default('text');
            $table->string('fts', 100)->nullable()->default('text');
            $table->string('ftu', 100)->nullable()->default('text');
            $table->string('tsh', 100)->nullable()->default('text');
            $table->string('igm', 100)->nullable()->default('text');
            $table->string('igg', 100)->nullable()->default('text');
            $table->softDeletes();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resultats');
    }
}
