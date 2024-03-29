import React, { useState,useEffect, useCallback} from "react";
import ReactMarkdown from "react-markdown";
import {useMountedRef} from "./hooks";
import GridLoader from "react-spinners/GridLoader";



export default function RepositoryReadme({repo, login}){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [markdown, setMarkdown] = useState("")

    const mounted = useMountedRef();
    const loadReadme = useCallback( async (login, repo) => {
        setLoading(true)
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`
        const { download_url } = await fetch(uri).then(response => response.json())

        const markdown = await fetch(download_url).then(response => response.text())

        if (mounted.current) {
            setMarkdown(markdown);
            setLoading(false); }
    }, [])

        useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo).catch(setError)

    }, [repo])

    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    if (loading) return <div className="loading2"> <GridLoader /></div>

    return (
        <ReactMarkdown className="repo-readme" children={markdown}/>
    )

}

