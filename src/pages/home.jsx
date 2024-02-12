import React from 'react'
import ContentLayout from '../components/layouts/content';
import HomeLayout from '../components/layouts/home';

export default function HomePage() {     
    return (    
        <ContentLayout current_page="home">
            <HomeLayout></HomeLayout>
        </ContentLayout>
    )
}
