import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ServiceMain from '../components/service';
import WhatsAppIcon from '../components/common/whatsapp';
import AbdichtungsMain from '../components/abdichtungstechnik';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <WhatsAppIcon></WhatsAppIcon>
      <AbdichtungsMain></AbdichtungsMain>
    </Wrapper>
  );
};

export default index;