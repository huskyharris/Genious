import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServiceMain from '../components/service';
import WhatsAppIcon from '../components/common/whatsapp';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <WhatsAppIcon></WhatsAppIcon>
      <ServiceMain />
    </Wrapper>
  );
};

export default index;