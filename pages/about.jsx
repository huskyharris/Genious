import AboutMain from '../components/about/aboutmain';
import WhatsAppIcon from '../components/common/whatsapp';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'über uns'} />
      <WhatsAppIcon></WhatsAppIcon>
      <AboutMain/>
    </Wrapper>
  );
};

export default index;