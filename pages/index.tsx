import HomeHeader from 'components/jobListPage/homeHeader'
import SearchResults from 'components/jobListPage/searchList'
import Layout from 'components/layout'

export default function Dashboard() {
  return (
    <Layout pageKey="Dashboard">
      <div className="min-h-full bg-gray-100">
        <HomeHeader />
        <div className="py-10">
          <div className="mx-auto max-w-3xl px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className={'lg:col-span-12'}>
              <div className="mt-4">
                <h1 className="sr-only">Recent jobs</h1>
                <SearchResults />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  )
}
