import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ServicePageLayout } from '../../components/services/ServicePageLayout';
import { servicesData } from '../../data/services';

interface ServiceDetailPageProps {
  forcedSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ forcedSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = forcedSlug || slug;

  const service = servicesData.find((s) => s.slug === activeSlug || s.id === activeSlug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return <ServicePageLayout service={service} />;
};
