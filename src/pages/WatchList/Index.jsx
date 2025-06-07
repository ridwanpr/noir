import AppLayout from "../../components/layouts/AppLayout";
import WatchlistBody from "./components/WatchListBody";
import WatchListHeader from "./components/WatchListHeader";

const WatchListPage = () => {
  return (
    <AppLayout>
      <section className="py-16 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <WatchListHeader />
          <WatchlistBody />
        </div>
      </section>
    </AppLayout>
  );
};

export default WatchListPage;
