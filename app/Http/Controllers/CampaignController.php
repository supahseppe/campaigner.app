<?php

namespace App\Http\Controllers;

use App\Campaign;
use App\Http\Resources\Campaign as CampaignResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CampaignController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('autocomplete');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index($own = true)
    {
        if ($own) {
            $campaigns = Auth::user()->campaigns()->paginate();
        } else {
            $campaigns = Campaign::all()->paginate();
        }

        return Inertia::render('Campaign/Browse', [
             'pager' => $campaigns->only(
                     'id',
                     'title',
                     'slug',
                     'summary',
                     'users'
                 )
         ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Campaign/Add');
    }

    /**
     * Show the form for creating a new campaign if the user has no campaigns.
     *
     * @return \Inertia\Response
     */
    public function initial()
    {
        return Inertia::render('Campaign/Initial');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $campaign = Campaign::create(
            $request->validate([
                'title' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );

        Auth::user()->campaigns()->save($campaign);

        if ($request->get('initial')) {
            return Redirect::route('campaigns.edit', [$campaign])->with('success', 'Campaign created! Now we can add details.');
        }
        return Redirect::route('campaigns.show', [$campaign])->with('success', 'Campaign created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Campaign $campaign
     * @return \Inertia\Response
     */
    public function show(Campaign $campaign)
    {
        $user = Auth::user();
        $user->campaign = $campaign;
        $campaign->load(['users', 'characters', 'npcs', 'factions', 'locations', 'tasks']);

        return Inertia::render('Campaign/Read', [
            'campaign' => $campaign
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Campaign $campaign)
    {
        $campaign->update(
            $request->validate([
                'title' => ['required'],
                'description' => ['nullable', 'max:1500'],
            ])
        );
        return Redirect::route('campaigns.show', [$campaign])->with('success', 'Campaign updated.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Campaign $campaign
     * @return \Inertia\Response
     */
    public function edit(Campaign $campaign)
    {
        $campaign->load(['players', 'characters', 'npcs', 'factions', 'locations', 'tasks']);
        return Inertia::render('Campaign/Edit', [
            'campaign' => $campaign
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Campaign  $campaign
     * @return \Illuminate\Http\RedirectResponse
     * @throws
     */
    public function destroy(Campaign $campaign)
    {
        $campaign->users()->detach();
        $campaign->delete();
        return Redirect::route('campaigns.index')->with('success', 'Campaign deleted.');
    }

    /**
     * Restores the specified resource.
     *
     * @param  \App\Campaign  $campaign
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Campaign $campaign)
    {
        $campaign->restore();
        return Redirect::back()->with('success', 'Campaign restored.');
    }

    public function autocomplete(Request $request)
    {
        $input = $request->get('q');
        $field = $request->get('field');
        $result = Campaign::where($field, 'LIKE', '%' . $input . '%')->get();

        return response()->json($result);
    }
}
