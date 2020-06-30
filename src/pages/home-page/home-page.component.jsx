import React from 'react'


import Cover from '../../components/cover/cover.component';
import Info from '../../components/info/info.component'
import About from '../../components/about/about.component'
import Detailed from '../../components/detailed/detailed.component';

const HomePage = () => {
    return (
        <div>
            <Cover/>
            <About/>
            <Info/>
            <Detailed/>
        </div>
    )
}
export default HomePage