"use client";
import { useEffect } from "react";
import { useParams, useNavigate } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";

interface LocaleRedirectProps {
  locale: string;
}

const LocaleRedirect = ({ locale }: LocaleRedirectProps): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const rest = (params["*"] ?? "").replace(/^\//, "");
  const englishPath = rest ? `/${rest}` : "/";

  useEffect(() => {
    navigate(englishPath, { replace: true });
  }, [navigate, englishPath]);

  return (
    <PageHead
      title="Redirecting"
      description={`Redirecting to English content for ${locale} locale.`}
      canonical={englishPath}
      noIndex={true}
    />
  );
};

export default LocaleRedirect;


