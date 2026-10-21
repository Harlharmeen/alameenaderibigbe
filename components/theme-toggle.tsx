'use client';
import {Moon, Sun} from 'lucide-react';
import {useEffect,useState} from 'react';
export default function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const saved=localStorage.getItem('theme');const d=saved==='dark'||(!saved&&matchMedia('(prefers-color-scheme: dark)').matches);setDark(d);document.documentElement.classList.toggle('dark',d)},[]);function toggle(){const d=!dark;setDark(d);document.documentElement.classList.toggle('dark',d);localStorage.setItem('theme',d?'dark':'light')}return <button aria-label="Toggle theme" onClick={toggle} className="grid size-9 place-items-center rounded-full border grid-line transition hover:scale-105">{dark?<Sun size={15}/>:<Moon size={15}/>}</button>}
