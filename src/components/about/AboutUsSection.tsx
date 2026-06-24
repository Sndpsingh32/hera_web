import plantAerial from "@/assets/plant-aerial.jpg";

export function AboutUsSection() {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Container width exactly derived from Figma (755 + 584 + 60) */}
      <div className="w-full lg:w-[1399px] mx-auto pt-[100px] pb-[100px] px-5 lg:px-0">
        
        {/* items-stretch guarantees the right column is precisely as tall as the left column (image) */}
        <div className="flex flex-col lg:flex-row items-stretch w-full">
          
          {/* Left Column */}
          {/* lg:pt-[16px] precisely offsets the heading to be 60px below the red card top, matching Figma */}
          <div className="w-full lg:w-[755px] flex flex-col shrink-0 lg:pt-[16px]">
            <span className="block font-display text-[20px] font-semibold text-[#EB1E28] uppercase mb-[16px]">
              ABOUT US
            </span>
            <h2 className="font-display font-semibold text-[50px] leading-[100%] text-black lg:w-[526px] mb-[50px]">
              Forged for the Steel
              <br />
              Value Chain
            </h2>
            <img 
              src={plantAerial}
              alt="Steel Manufacturing Plant" 
              className="w-full lg:w-[755px] h-[400px] lg:h-[613px] object-cover rounded-[10px] shrink-0"
            />
          </div>

          {/* Gap */}
          <div className="hidden lg:block w-[60px] shrink-0" />

          {/* Right Column */}
          <div className="w-full lg:w-[584px] relative mt-[40px] lg:mt-0 flex flex-col">
            
            {/* Red Motto Card */}
            {/* Top-0 aligns with the top of the container. 
                pt-[28px] exactly matches the 128px top bound from Figma screenshot 4. */}
            <div className="relative lg:absolute lg:top-0 lg:left-[-128.5px] w-full lg:w-[700px] lg:h-[300px] bg-[#EB1E28] rounded-[10px] z-10 pt-[28px] px-[34px] pb-[34px] flex flex-col">
              
              <div className="w-full mb-[24px]">
                <span className="block font-display text-[16px] lg:text-[18px] font-semibold uppercase text-white mb-[4px] tracking-wider">
                  OUR MOTTO
                </span>
                {/* Reduced font to 44px and added whitespace-nowrap to absolutely guarantee it stays on 
                    a single line and perfectly matches the Figma layout without overflowing the box. */}
                <h3 className="font-display text-[28px] lg:text-[44px] font-semibold leading-[1.1] text-white whitespace-nowrap">
                  Growing Stronger Together
                </h3>
              </div>

              <div className="w-full">
                {/* Reduced font to 18px to ensure it perfectly fits within 3 lines and NEVER overflows the bottom of the 300px red card. */}
                <p className="font-body text-[16px] lg:text-[18px] font-normal leading-[1.6] text-white">
                  For us, progress goes beyond production scale. It is reflected in the reliability we bring to our customers, the discipline we build into our operations, and the value we create across the steel value chain.
                </p>
              </div>

            </div>

            {/* Description Block */}
            {/* Adjusted font to 18px to accurately reflect Figma proportions.
                mt-auto pushes this block to the absolute bottom of the container, 
                meaning it aligns FLAWLESSLY with the bottom of the 613px image! */}
            <div className="w-full lg:w-[584px] mt-[40px] lg:mt-auto font-body text-[18px] leading-[160%] text-[#000]">
              <p className="mb-[32px]">
                Hira Electro Smelters Limited (HESL) stands at the centre of India's ferro alloys manufacturing landscape, with an integrated operation built to serve the evolving needs of steel producers across domestic and global markets. Located near Visakhapatnam Port and backed by the wider Hira Group ecosystem, we bring together manufacturing scale, metallurgical capability, process discipline, and export connectivity to deliver Ferro Manganese products with consistency and reliability.
              </p>
              <p>
                Our journey has been shaped by continuous strengthening of capability. What began as a focused smelting operation has moved from strength to strength through acquisition, integration into the Hira Group ecosystem, and subsequent expansion. Each phase has strengthened our ability to serve the steel value chain with greater scale.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
