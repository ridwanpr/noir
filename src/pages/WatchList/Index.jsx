import AppLayout from "../../components/layouts/AppLayout";
import { useWatchlist } from "../../hooks/watchlistHooks";
import WatchlistBody from "./components/WatchListBody";
import WatchListHeader from "./components/WatchListHeader";

const WatchListPage = () => {
  const { data: watchList, isLoading } = useWatchlist();

  return (
    <AppLayout>
      <section className="py-16 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <WatchListHeader />
          <WatchlistBody watchList={watchList} isLoading={isLoading} />
        </div>
      </section>
    </AppLayout>
  );
};

export default WatchListPage;
