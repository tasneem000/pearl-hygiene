import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { faFilter, faFlag, faHandshake, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import './OurServices.css';

const OurServices = () => {
  return (
    <div className="service-section bg-gray-100">
      <div className="services-header mb-8">
        <h1 className="font-semibold text-[#581412]">Our Services</h1>
        <p>Pearl Hygiene is adjudged as one of the largest provider of cleaning solutions in the Kingdom of Saudi Arabia by Industry standards and experts. Established in the year 1986 in Riyadh the Company is anchored by a dedicated workforce of more than 50 professionals.
        </p>
      </div>
      <div style={{ padding: '10px' }}>
        <Grid container spacing={2} >
          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>
            <div class="p-6 rounded-lg text-center bg-white shadow-lg">
              <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                <FontAwesomeIcon icon={faHandshake} className="text-4xl text-[#0464a0]" />
              </div>
              <h2 class="text-lg text-[#581412] font-semibold title-font mb-2">CONSULTING</h2>
              <p class="leading-relaxed text-base text-center">Our Experts provide most appropriate and cost effective solutions catering to business dynamics.</p>
              {/* <Link href='/'>Read More</Link> */}
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>
            <div class="p-6 rounded-lg text-center bg-white shadow-lg">
              <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                <FontAwesomeIcon icon={faFlag} className="text-4xl text-[#0464a0]" />
              </div>
              <h2 class="text-lg text-[#581412] font-semibold title-font mb-2">TRAINING</h2>
              <p class="leading-relaxed text-base text-center">Pearl Hygiene offers free of cost onsite training to clients&apos; representatives for better performance.</p>
              {/* <Link href='/'>Read More</Link> */}
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>
          <div class="p-6 rounded-lg text-center bg-white shadow-lg">
              <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                <FontAwesomeIcon icon={faFilter}  className="text-4xl text-[#0464a0]" />
              </div>
              <h2 class="text-lg text-[#581412]text-gray-900 font-semibold title-font mb-2">AFTER SALES</h2>
              <p class="leading-relaxed text-base text-center">Pearl Hygiene service team assures equipment&apos;s and tools performance according to buyers&apos; expectations.</p>
              {/* <Link href='/'>Read More</Link> */}
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>
          <div class="p-6 rounded-lg text-center bg-white shadow-lg">
              <div class="w-20 h-20 inline-flex items-center border border-dashed border-[#0464a0] justify-center rounded-full mb-4">
                <FontAwesomeIcon icon={faSnowflake}  className="text-4xl text-[#0464a0]" />
              </div>
              <h2 class="text-lg text-[#581412] font-semibold title-font mb-2">RENTALS</h2>
              <p class="leading-relaxed text-base text-center">
              Pearl Hygiene look forward to tailor its offerings to match your specific business needs to assure quality of service.</p>
              {/* <Link href='/'>Read More</Link> */}
            </div>
          </Grid>

        </Grid>
      </div>

    </div>
  );
};

export default OurServices;