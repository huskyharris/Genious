import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeMain from '../components/home';
import WhatsAppIcon from '../components/common/whatsapp';
import Alert from '../components/elements/Alert';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <WhatsAppIcon></WhatsAppIcon>
      <HomeMain />
    </Wrapper>
  );
};

export default index;