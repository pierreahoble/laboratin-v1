<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLigneAnalysesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ligne_analyses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('analyse_id')->nullable();
            $table->foreign('analyse_id')->references('id')->on('analyses');
            $table->unsignedBigInteger('nature_analyse_id')->nullable();
            $table->foreign('nature_analyse_id')->references('id')->on('nature_analyses');
            $table->string('prix_unitaire', 100)->nullable()->default('text');
            $table->string('quantite', 100)->nullable()->default('text');
            $table->string('montant', 100)->nullable()->default('text');
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
        Schema::dropIfExists('ligne_analyses');
    }
}
