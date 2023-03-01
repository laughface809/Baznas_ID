import React from 'react'
import { Grid } from '@mui/material'
import { Section, Slider, SliderItem, Recomended, Developers } from '../components'
import developersData from '../assets/dummy/developers'
import newsData from '../assets/dummy/news'
import FundInformation from '../components/Fund'
import News from '../components/Content/News'

const HomeView = () => {
    return (
        <div>
            <Slider>
                <SliderItem />
            </Slider>
            <FundInformation />
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
    )
}

export default HomeView