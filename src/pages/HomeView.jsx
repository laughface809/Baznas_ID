import React from 'react'
import { Grid } from '@mui/material'
import { Section, Slider, SliderItem, Recomended, Developers } from '../components'
import developersData from '../assets/dummy/developers'
import newsData from '../assets/dummy/news'
import FundInformation from '../components/Fund'
import News from '../components/Content/News'
import CustomImageList from '../components/Gallery/shortGallery'
import ActionAreaCard from '../components/Contact'

const HomeView = ({
    page,
    setPage,
    status,
    setStatus
}) => {
    return (
        <React.Fragment>
        {page === 0 &&
            <div>
                <Slider>
                    <SliderItem />
                </Slider>
                <Section>
                    <FundInformation setPage={setPage} status={status} setStatus={setStatus} />
                </Section>
                <Section>
                    <Grid container spacing={{ xs: 8, md: 4 }} sx={{ alignItems: 'stretch' }}>
                        {newsData.map((item, index) => <News key={`news-${index}`} {...item} />)}
                    </Grid>
                </Section>
                <Recomended />
                <Section>
                    <Grid container spacing={{ xs: 8, md: 4 }} sx={{ alignItems: 'stretch' }}>
                        {developersData.map((item, index) => <Developers key={`developers-${index}`} {...item} />)}
                    </Grid>
                </Section>
                <br />
                <br />
                <br />
            </div>
        }

        {page === 1 && 
        <CustomImageList />
        }

        {page === 2 && 
        <ActionAreaCard />
        }
        </React.Fragment>
    )
}

export default HomeView