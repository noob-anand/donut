"use client"
import React from 'react';
import './ExplorePage.css';
import { useState } from "react";
import { useRouter } from "next/navigation";




const ExplorePage = () => {
    // Mock data for the people
    const people = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        name: `Person ${i + 1}`,
        role: 'Creator',
        img: `https://i.pravatar.cc/300?u=${i}`
    }));

    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!query.trim()) return;

        const username = query.trim().toLowerCase();

        router.push(`/${encodeURIComponent(username)}`);
    };

    return (
        <div className="explore-container text-white">
            <div className="min-h-[50px]"></div>

            <div className=''>
                <form class="max-w-md mx-auto rounded-lg">
                    <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                        </div>
                        <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search" required />
                        <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
                        onClick={handleSearch}>Search</button>
                    </div>
                </form>
            </div>

            <header className="explore-header mt-3">
                <h1 className='text-3xl font-semibold'>Explore Community</h1>
                <p>Discover interesting people from around the world.</p>
            </header>

            <div className="explore-grid">
                {people.map((person) => (
                    <div key={person.id} className="person-card">
                        <img src={person.img} alt={person.name} className="person-image" />
                        <div className="person-info">
                            <h3>{person.name}</h3>
                            <p>{person.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;