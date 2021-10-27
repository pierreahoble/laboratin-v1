<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom_patient', 100)->nullable()->default('text');
            $table->string('prenom_patient', 100)->nullable()->default('text');
            $table->string('email_patient', 100)->nullable()->default('text');
            $table->string('age_patient', 100)->nullable()->default('text');
            $table->string('telephone_patient', 100)->nullable()->default('text');
            $table->string('nom_accompagnant_patient', 100)->nullable()->default('text');
            $table->string('telephone_accompagnant_patient', 100)->nullable()->default('text');
            $table->string('observation', 100)->nullable()->default('text');
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
        Schema::dropIfExists('patients');
    }
}
