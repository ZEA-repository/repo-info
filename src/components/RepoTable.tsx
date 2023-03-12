import { Link } from 'react-router-dom'
import './RepoTable.styles.css'

interface RepoInfo {
  id: string
  nameWithOwner: string
  pushedAt: string
  stargazerCount: number
  url: string
}

export const RepoTable: React.FC<{ data: RepoInfo[] }> = ({ data }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Repository</th>
          <th>Stars</th>
          <th>Latest Commit</th>
          <th>Url</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, stargazerCount, url, nameWithOwner, pushedAt }) => (
          <tr key={id}>
            <td>
              <Link to={`repository/${nameWithOwner}`}>{nameWithOwner}</Link>
            </td>
            <td>{stargazerCount}</td>
            <td>
              <time dateTime={pushedAt}>
                {new Date(pushedAt).toLocaleDateString()}
              </time>
            </td>
            <td>
              <a href={url} target='_blank'>
                {url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
