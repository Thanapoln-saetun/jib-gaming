// Local assets (Real images downloaded from Figma)
const imgImgV3026V17B4F307Ce664Aeb8586B60A9D8236Hu1 = "/assets/images/ad-1.png";
const imgImgV3026V5614E812D9Df409FBb11920126639Ehu1 = "/assets/images/ad-2.png";
const imgImgV3026V53412A4E240D479FBac4B5C8361Db0Hu1 = "/assets/images/ad-3.png";
const imgImgV3026V73C62Bcb1E164705B22E50C14Dac64Hu1 = "/assets/images/ad-4.png";
const imgImgV3026V712Dbfd0C0D8473D8D4F0D0Cf125Echu1 = "/assets/images/ad-5.png";
const imgImgV3026V9E5C50C9B5104F34Bae1A5Ee42Fe56Hu1 = "/assets/images/ad-6.png";
const imgImgV3026V0277Dd5914Da474D90362827Bd9A9Fhu1 = "/assets/images/ad-7.png";
const imgImgV3026V5F57146509B849C3B8783C1D90A58Ehu1 = "/assets/images/ad-8.png";

export default function Ads() {
    const ads = [
        imgImgV3026V17B4F307Ce664Aeb8586B60A9D8236Hu1,
        imgImgV3026V5614E812D9Df409FBb11920126639Ehu1,
        imgImgV3026V53412A4E240D479FBac4B5C8361Db0Hu1,
        imgImgV3026V73C62Bcb1E164705B22E50C14Dac64Hu1,
        imgImgV3026V712Dbfd0C0D8473D8D4F0D0Cf125Echu1,
        imgImgV3026V9E5C50C9B5104F34Bae1A5Ee42Fe56Hu1,
        imgImgV3026V0277Dd5914Da474D90362827Bd9A9Fhu1,
        imgImgV3026V5F57146509B849C3B8783C1D90A58Ehu1,
    ];

    return (
        <section className="py-8">
            <div className="relative w-full overflow-hidden">
                <div className="flex items-center justify-center gap-6 px-8 py-8">
                    {ads.map((adImage, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-60 h-60 bg-cover bg-center bg-no-repeat shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            style={{
                                backgroundImage: `url('${adImage}')`
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 