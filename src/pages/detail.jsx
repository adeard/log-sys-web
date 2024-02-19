import React from 'react'
import ContentLayout from '../components/layouts/content';
import DetailLayout from '../components/layouts/detail';

export default function DetailPage() {     
    return (    
        <ContentLayout current_page="detail">
            <DetailLayout />
        </ContentLayout>
    )
}
