import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import  FeaturesMain from '../components/features';
import WhatsAppIcon from '../components/common/whatsapp';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <WhatsAppIcon></WhatsAppIcon>
      <FeaturesMain></FeaturesMain>
    </Wrapper>
  );
};

export default index;