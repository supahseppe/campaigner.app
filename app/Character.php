<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Character extends Model
{
    use RevisionableTrait, Sluggable, SluggableScopeHelpers;

    protected $fillable = ['name', 'alias', 'high_concept', 'bio', 'active', 'npc'];

    /**
     * Revision Settings
     */
    protected $revisionEnabled = true;
    protected $revisionCleanup = true; //Remove old revisions (works only when used with $historyLimit)
    protected $historyLimit = 100; //Maintain a maximum of 500 changes at any point of time, while cleaning up old revisions.

    // Use only one of the following:
    // protected $keepRevisionOf = ['title'];
    // protected $dontKeepRevisionOf = ['category_id'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return $this->getSlugKeyName();
    }

    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('role');
    }

    public function player()
    {
        return $this->belongsToMany('App\User')->wherePivot('role', '=', 'owner');
    }

    public function tasks() {
        return $this->belongsToMany('App\Task');
    }

    public function factions() {
        return $this->belongsToMany('App\Faction')->withPivot(['standing', 'reputation']);
    }

    public function locations()
    {
        return $this->belongsToMany('App\Location');
    }

}
