import { useHits, UseHitsProps } from 'react-instantsearch-hooks-web'
import { DummyJob } from 'types'
import JobCard from './jobCard'
export default function SearchResults(props: UseHitsProps<DummyJob>) {
  const { hits, results, sendEvent } = useHits<DummyJob>(props)

  return (
    <ul role="list" className="space-y-4">
      {hits.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </ul>
  )
}
