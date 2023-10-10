import { useLoaderData } from "react-router-dom"

export const GitHub = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Pawank06')
    //     .then(respons => respons.json())
    //     .then(data => {

    //         setData(data)

    //     })
    // }, [])
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4 '>GitHub Followers: {data.followers}
    <img className='rounded-full w-60 h-60 flex' src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Pawank06')

    return response.json()
}