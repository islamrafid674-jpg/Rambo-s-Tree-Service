import { motion } from 'motion/react';

const galleryItems = [
  {
    id: 1,
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/631866021_18102197419855655_8301210750254254023_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=107&ig_cache_key=MzgzMzgxNzgwMDUwMzQ2NDI3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=bCc8zUAjXlEQ7kNvwETeepk&_nc_oc=AdlsniR8GwY7Q0i6VN4LB18GTd0mPjvCPW_aWB2lI-XOCiEQi-d-WqT9o8-otzSm1HY&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_Afwll-h66H43tdgDdzXU0IGQB_XytIeW-CDfKGjRl5lTsA&oe=69B932D4',
    title: 'Large Tree Removal',
    category: 'Removal',
  },
  {
    id: 2,
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/624578128_18100820032855655_7769955826992421112_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzgyMjUzMzM3MTc3MjQ1NTM3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjc2NXgxMDIwLnNkci5DMyJ9&_nc_ohc=c5sOja-uQRAQ7kNvwHYMsG6&_nc_oc=Adnd_BLDX9bFToocgmBZlJCAfKwT7iUDN_hVZTV93Jp_Qo2uZvKX2f4YIY6CRZ3r6PM&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_Afx2S3b_n_kmxbxV0ZA3dFy_Mx2lrY73allbaBRS5IcDrA&oe=69B9276B',
    title: 'Palm Tree Maintenance',
    category: 'Trimming',
  },
  {
    id: 3,
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/610697732_864386336233384_5028407595599751382_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=109&ig_cache_key=MzgwMzA2MDE3NTQ4MjQ1ODkxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHg4NDguaGRyLkMzIn0%3D&_nc_ohc=bJryicrCT-QQ7kNvwGzi9nq&_nc_oc=Adklf82QnrUaJUqwKVMP5g5dgZpNrVoLImLzRue3n9aUgf9K_ApTBo46Q-B7Psnh5Rk&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-1.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_AfxC-pn1pfeKuXvf66QM82DXjhlkovJ2R2PR39uPfgPtmA&oe=69B933D9',
    title: 'Precision Pruning',
    category: 'Pruning',
  },
  {
    id: 4,
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/561135588_18089346133855655_1192854064708505608_n.jpg?stp=dst-jpegr_e35_s1080x1080_tt6&_nc_cat=102&ig_cache_key=MzczOTMxMTYwMDg1NjgzMzQxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=bCgk65w_pw8Q7kNvwEXzwUG&_nc_oc=AdnNTZIuqDQWTpVNzGn0Nl-PqBCX8T3h4Hq1W2wCO04TVoeWHGLjd9sNcxCU1ZndiBg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_AfyovZic_l1UKee6JxRrnonqRgh5-R6Edeznz6cRjHBJ2A&oe=69B92C22',
    title: 'Stump Grinding',
    category: 'Grinding',
  },
  {
    id: 5,
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/602833238_814677674907624_6546883963543622233_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=101&ig_cache_key=Mzc5MDg1NDkyNTI0MTY3ODIwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=omIAT8aPc8sQ7kNvwHiDws3&_nc_oc=Adni_HKJitSCSN_9QbYFZikTfWj1oUIstwmYPgVJB8WWXv0sxmQIf5ERncKtpWx27EQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&se=-1&_nc_ht=instagram.fdac2-2.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_Afy248zP-8UKCFLHYqaqSH6y6BPAkPc5n0kJwRnzoMkF4g&oe=69B9501E',
    title: 'Yard Cleanup',
    category: 'Cleanup',
  },
  {
    id: 6,
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/560357829_18089334565855655_7019132693835218907_n.jpg?stp=dst-jpegr_e35_s1080x1080_tt6&_nc_cat=107&ig_cache_key=MzczOTIxODA1NzkyMDM5MDgyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=RiV6Ez1YK40Q7kNvwHwwRhF&_nc_oc=AdkX0zFF27iDtk46d76Uh497VXkc_0OplAHsuv2wSzksV_TxFJUEGrs6vLMzWJZZvNI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_AfzXa4dIU64RqbNCFJe59VEyRavTsgCCw0RGLPsO6dCtVQ&oe=69B926AB',
    title: 'Emergency Response',
    category: 'Emergency',
  },
  {
    id: 7,
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/562442870_18089334313855655_8598062681102329184_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=105&ig_cache_key=MzczOTIxNzAxMjQyMzAwMDQzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=BN4R-lPi9SMQ7kNvwHObo5d&_nc_oc=AdnzmOiU6UIR324O7HiLGoLIyHqPFdSR7IigxSC2Wy-GlOUxOFCdd4-vmU2XSCyJDHc&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_AfzHXlu23OX10cCV9ReqM-F-OoLicpSwn4bUEGLLJe91LQ&oe=69B925A6',
    title: 'Tree Health Assessment',
    category: 'Assessment',
  },
  {
    id: 8,
    image: 'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/561680638_18089333917855655_6044089737129482988_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=105&ig_cache_key=MzczOTIxMzU0MjE4MTc1OTMxNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=485Tn0AgQzsQ7kNvwFJHEGF&_nc_oc=AdlySojExot3qEHtCTqpzZhl_EmDCvvL-t9llQEu08CpxUPfmwOEIFcobF65HVTXxXg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_Afy4K7uJgNELdjrdiIyaTqlgV-mMIbypyHEYf6CSMuxIzA&oe=69B94578',
    title: 'Professional Care',
    category: 'Maintenance',
  },
  {
    id: 9,
    image: 'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/503323415_1961415301354137_4634412492770080914_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzQ0MTAzMDg4MTExOTAyMjgyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=0q7V6U0WOsAQ7kNvwGJNrui&_nc_oc=AdngbFf7qP4gsgdPvg7DbKeT6h4EKU3kB4g10FHsn02R71elEWi_0CHAM66eWbRS7d0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=p-xiwFp-V_xNKS7bQb7bcg&_nc_ss=8&oh=00_AfyaHsIiQOZKDOiLqyZNccd_iqvwCL_QaXijtldSTMKrzw&oe=69B936FD',
    title: 'Safety First',
    category: 'Safety',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 tracking-tight">
            Recent Projects Gallery
          </h3>
          <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed">
            Take a look at some of our recent tree care projects across the San Diego area. We take pride in leaving every property looking better than we found it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent font-medium text-sm mb-1">{item.category}</span>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
