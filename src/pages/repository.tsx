import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { REPO_DETAILS } from '@/gql/repoDetails'

import './repository.styles.css'

interface Owner {
  avatarUrl: string
  login: string
  url: string
}
interface LanguageNode {
  name: string
  color: string
  id: string
}

interface RepoDetails {
  nameWithOwner: string
  stargazerCount: number
  pushedAt: string
  owner: Owner
  languages: { nodes: LanguageNode[] }
  description: string
}

export const RepositoryPage = () => {
  const { owner, name } = useParams()
  const { loading, error, data } = useQuery(REPO_DETAILS, {
    variables: { owner, name },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  const repo: RepoDetails = data?.repository
  const user: Owner = repo?.owner

  return (
    <section>
      <div className='flex gap15 repository'>
        <div className='flex col'>
          <figure>
            <img
              className='repository_profile_img'
              src={user.avatarUrl}
              alt='profile photo'
            />
            <figcaption>{user.login}'s profile picture</figcaption>
          </figure>
        </div>

        <div className='flex col gap15'>
          <div>
            <h1>{name}</h1>
            <a href={user.url}>{owner}</a>
            <ul className='flex gap5 wrap'>
              {repo.languages?.nodes.map((language) => (
                <li key={language.id}>
                  <svg
                    style={{
                      fill: language.color,
                      marginBottom: '-2px',
                    }}
                    aria-hidden='true'
                    height='16'
                    viewBox='0 0 16 16'
                    version='1.1'
                    width='16'
                    data-view-component='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8z'
                    ></path>
                  </svg>
                  {language.name}
                </li>
              ))}
            </ul>
          </div>

          {repo.description}

          <table className='table'>
            <thead>
              <tr>
                <th>Stars</th>
                <th>Latest Commit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {repo.stargazerCount}</td>
                <td>
                  <time dateTime={repo.pushedAt}>
                    {new Date(repo.pushedAt).toLocaleDateString()}
                  </time>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
