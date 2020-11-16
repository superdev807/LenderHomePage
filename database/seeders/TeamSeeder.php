<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Team;
use App\Models\Player;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ( $i = 0; $i < 5; ++ $i ) {
            $team = Team::factory()->create();
            for ( $j = 0; $j < 5; ++ $j ) {
                $player = Player::factory()->create([
                    'team_id' => $team->id
                ]);
            }
        }
    }
}
