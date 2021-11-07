<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableResultats extends Migration
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
            $table->unsignedBigInteger('analyse_id')->nullable();
            $table->foreign('analyse_id')->references('id')->on('analyses');
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
            $table->string('vft3', 100)->nullable()->default('');
            $table->string('vft4', 100)->nullable()->default('');
            $table->string('vtsh', 100)->nullable()->default('');
            $table->string('igmR', 100)->nullable()->default('');
            $table->string('iggR', 100)->nullable()->default('');
            $table->string('iggVt', 100)->nullable()->default('');
            $table->string('iggVr', 100)->nullable()->default('');
            $table->string('aghbsKit', 100)->nullable()->default('');
            $table->string('aghbsTech', 100)->nullable()->default('');
            $table->string('tphaKit', 100)->nullable()->default('');
            $table->string('tphaTech', 100)->nullable()->default('');
            $table->string('vdrlKit', 100)->nullable()->default('');
            $table->string('vdrlTech', 100)->nullable()->default('');
            $table->string('tcavpsa', 100)->nullable()->default('text');
            $table->string('tcavpso', 100)->nullable()->default('text');
            $table->string('tcvpsa', 100)->nullable()->default('text');
            $table->string('tcvpso', 100)->nullable()->default('text');
            $table->string('inrvpsa', 100)->nullable()->default('text');
            $table->string('inrvpso', 100)->nullable()->default('text');
            $table->string('tsvpsa', 100)->nullable()->default('text');
            $table->string('tsvpso', 100)->nullable()->default('text');
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
        Schema::dropIfExists('table_resultats');
    }
}
