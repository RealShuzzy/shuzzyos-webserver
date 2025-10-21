import { useState } from "react";

export default function DownloadOptions () {
    const [selected, setSelected] = useState('latest');

    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2,'0')
    const last_month = String(now.getMonth()).padStart(2,'0')
    const day = String(now.getDate()).padStart(2,'0')
    const date = `${year}.${month}.${day}`

    const iso_latest = `shuzzyos-${year}.${month}.01-x86_64.iso`
    const iso_last_month = `shuzzyos-${year}.${last_month}.01-x86_64.iso`
    const iso_dev = `dev-shuzzyos-${year}.${month}-x86_64.iso`
    let iso_name = ''

    switch (selected) {
        case 'latest':
            iso_name = iso_latest
            break
        case 'last-month':
            iso_name = iso_last_month
            break
        case 'dev':
            iso_name = iso_dev
            break
        default:
            iso_latest
    }


    return (
        <div>
            <input 
                type="radio" 
                id="latest" 
                name="download" 
                value="latest" 
                checked={selected === 'latest'}
                onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="latest">Latest</label><br />

            <input 
                type="radio" 
                id="last-month" 
                name="download" 
                value="last-month" 
                checked={selected === 'last-month'}
                onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="last-month">Last Month</label><br />

            <input 
                type="radio" 
                id="dev" 
                name="download" 
                value="dev" 
                checked={selected === 'dev'}
                onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="dev">Dev (unstable)</label><br />
            <a href={`iso/${iso_name}`} download={`${iso_name}`}> Download {iso_name}</a>
            
        </div>
    )
}