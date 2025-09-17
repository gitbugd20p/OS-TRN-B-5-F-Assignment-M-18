import Banner from "../components/Banner";
import FeaturedProject from "../components/FeaturedProject";
import StatsCards from "../components/StatsCards";
import Subscribe from "../components/Subscribe";
import WorkList from "../components/WorkList";

const Home = () => {
    return (
        <>
            <Banner />
            <WorkList />
            <StatsCards />
            <FeaturedProject />
            <Subscribe />
        </>
    );
};

export default Home;
