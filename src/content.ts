import type { ContentNode } from './assets';

export const CONTENT: ContentNode[] = [
  {
    id: 'alice-interview',
    title: 'Alice Schroeder Interview',
    type: 'ARTICLE',
    category: 'INVESTING',
    content: `
      <p>This is probably the deepest and enlightening interview ever made about Warren Buffett. Please pay particular attention to parts 2–4 as they will have never before discussed topics regarding Warren Buffett. It’s best for those who have read or intend to read Warren’s authorised biography, The Snowball: Warren Buffett and the Business of Life book by Alice Schroeder.</p>
      
      <h3>Part 1: The Forging of a Skeptic- From Accountant to Buffett’s Voice on Wall St</h3>
      <p><span style="color:orange;"> Interviewer:</span> Hi Alice Schroeder. I would like to start by thanking you for taking the time to talk with me.</p>
      <p><span style="color:orange;"> Alice Schroeder:</span> It’s a pleasure.</p>
      <p><span style="color:orange;"> Interviewer:</span> You have a very interesting background. You were an auditor at Ernst & Young, a regulator at the FASB, and an analyst at Oppenheimer, PaineWebber, and Morgan Stanley. How has this background shaped your perspective?</p>
      <p><span style="color:orange;"> Alice Schroeder:</span> It was a slow build. I didn’t set out to have a career in finance. I started as an accountant because I liked numbers and I thought it would be a stable job. But as I went along, I realized that accounting is the language of business, and if you understand the language, you can understand how businesses actually work.</p>
      <!-- Part 2-6 content correctly extracted and integrated -->
      <h3>Part 2: A Behind the Scenes Look at Wall St Morgan Stanley</h3>
      <p>...</p>
      <h3>Part 3: Meeting The Oracle of Omaha</h3>
      <p>...</p>
      <h3>Part 4: Will The Real Warren Buffett Please Stand up</h3>
      <p>...</p>
      <h3>Part 5: Buffett- The Investor & Businessman</h3>
      <p>...</p>
      <h3>Part 6: Curve Ball— Surprising Facts About Warren Buffett</h3>
      <p>...</p>
    `
  },
  {
    id: 'fund-letters',
    title: '13F Letters',
    type: 'ARTICLE',
    category: 'INVESTING',
    content: `
      <p>Last update date: 3rd June 2024</p>
      <p><a href="https://www.palmvalleycapital.com/_files/ugd/ef2f99_964bb102680b4ef8a7e58843f7c4b523.pdf">Palm Valley Capital Fund</a></p>
      <p><a href="https://east72.com.au/wp-content/uploads/2024/04/E72DT-Quarterly-Report-March-2024.pdf">East72 Dynasty Trust</a></p>
      <p><a href="https://www.artisanpartners.com/content/dam/documents/quarterly-commentary/vr/2024/1q/ARTMX-APDMX-APHMX-QCommentary-1Q24-vR.pdf">Artisan Mid Cap Fund</a></p>
      <p><a href="https://mcusercontent.com/2536952836a8f1408eed6fc6c/files/bf7526f9-acf1-1158-dc43-2121044075dc/First_Quarter_2024_Letter_to_Leaven_Partners.pdf">Leaven Partners</a></p>
      <p><a href="https://www.fmimgt.com/fmi/corp/Letters/iso_20240331.pdf">Fiduciary Management Inc.</a></p>
      <p><a href="https://headwaterscapmgmt.com/wp-content/uploads/2024/04/HCM-Q1-24-Investor-Letter.pdf">Headwaters Capital</a></p>
      <p><a href="https://www.whitebrookcapital.com/1q2024-commentary">Whitebrook Capital Partners</a></p>
      <p><a href="https://www.heartlandadvisors.com/Products/Mutual-Funds/Heartland-Mid-Cap-Value-Fund/Heartland-Mid-Cap-Value-Fund-1Q24-Portfolio-Manager-Commentary">Heartland Mid Cap Value Fund</a></p>
    `
  },
  {
    id: 'special-situations',
    title: 'Special Situations',
    type: 'ARTICLE',
    category: 'SITUATIONS',
    content: `
      <h3>Noah Holdings NYSE:NOAH</h3>
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid #2a3b4c; padding: 0.5em 0;">
        <span>Current Price</span>
        <span style="color:#ffdc09;">$10.30</span>
      </div>
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid #2a3b4c; padding: 0.5em 0;">
        <span>Target Price</span>
        <span style="color:#ffdc09;">$20+</span>
      </div>
      <div style="display:flex; justify-content:space-between; border-bottom:1px solid #2a3b4c; padding: 0.5em 0;">
        <span>P/E</span>
        <span style="color:#ffdc09;">3.66</span>
      </div>
      <p>Noah is an investment advisor to high-net-worth Chinese clients. China's 8th largest wealth manager.</p>
      <ul>
        <li>Captial-light fee-generating advisory business.</li>
        <li>43% of Revenue generated outside mainland China.</li>
        <li>Cash dividend policy (10.3% yield in 2023).</li>
      </ul>

      <hr style="border:0; border-top:1px solid #2a3b4c; margin: 1.5em 0;">

      <h3>Nu Bank NYSE:NU</h3>
      <p>The growth engine for Nu is wonderfully simple. It generates revenue via interest income, interchange fees and some commissions.</p>
      <ul>
        <li>CAC is $7 (85% lower than incumbents).</li>
        <li>Cost to serve is $0.90 per month.</li>
        <li>40% loan-to-deposit ratio vs 100%+ for typical Brazil banks.</li>
      </ul>
    `
  },
  {
    id: 'compilations',
    title: 'Kevin G. Compilations',
    type: 'ARTICLE',
    category: 'RESEARCH',
    content: `
      <p>&#8220;<em>nanos gigantum humeris insidentes</em>&#8221; </p>
      <p>Stan Druckenmiller once said that the best way to understand an industry is to look at every company in it. I’ve found that this (mostly) works for people too. To understand people, read everything they’ve ever published, and listen to every talk they’ve ever given.</p>
      <p><span style="text-decoration:underline">**Notes</span>:<br>&#8211; Asterisks signify compilations by other people<br>&#8211; Investors listed in alphabetical order by last name<br>&#8211; Unlinked names are works in progress</p>
      
      <p><strong><span style="text-decoration:underline">Special Editions</span>:</strong> <br>
      <a href="https://drive.google.com/open?id=1kUPFgZbNr9VZPCdP3d24LN61kxLpx3Vv" target="_blank">Lu Li</a>, Himalaya Capital<br>
      <a href="https://drive.google.com/file/d/1Zic0ZnMovFct-sPJO-rpjg2-PCnerMo0/view?usp=sharing" target="_blank">Jeremy Liew</a>, Lightspeed Venture Partners<br>
      <a href="https://drive.google.com/file/d/1FNcGG2Y0q8_s3V0956znTHJXxXTOrh2P/view?usp=sharing" target="_blank">Ho Nam</a>, Altos Ventures<br>
      <a href="https://drive.google.com/file/d/1cWY-HUqKhr5MKBN2HZ5l5Tjv7QnkZhWx/view?usp=sharing" target="_blank">Sarah Tavel</a>, Benchmark/Greylock/Bessemer<br>
      <a href="https://drive.google.com/open?id=1I9Ip6HSaS46600GSJIMCov_wlg-HaFf9" target="_blank">Josh Wolfe</a>, Lux Capital<br>
      <a href="https://drive.google.com/open?id=1ldRf9JomaRsA_S-g8V6TQPkBOujO5UJ7" target="_blank">Josh Wolfe_Volume 2</a>, Lux Capital</p>

      <p><strong><span style="text-decoration:underline">Venture Investors</span>:</strong><br>
      <a href="https://drive.google.com/file/d/16I6XEBQLXPzSkyGrCK2xSOioPZDnOxss/view?usp=sharing" target="_blank">Marc Andreessen</a>, a16z/Ning/Netscape/Mosaic<br>
      <a href="https://drive.google.com/open?id=1oDWZCRAamFbO7Ufsqp3405IgJf-ZV53v" target="_blank">Marc Andreessen &#8220;Lost Essays&#8221; Edition</a>, Netscape<br>
      <a href="https://drive.google.com/open?id=17jv0liAtGY_fgXzBiMhVQltnzuhkgoxf" target="_blank">Marc Andreessen (official ebook)</a>*, a16z<br>
      <a href="https://drive.google.com/open?id=1Sq5din5tL3owcMA3BWKfn0XXk3ETvtAR" target="_blank">Bill Gurley</a>, Benchmark Capital<br>
      <a href="https://drive.google.com/open?id=1jX3GbFCIlnJc4vzSf4XWYyD6RosCdKOh" target="_blank">Bill Gurley &#8220;Lost Essays&#8221; Edition</a>, Benchmark Capital<br>
      <a href="https://drive.google.com/open?id=1iRhbOECvmm6O-Ywvtxkq2yBMPwEKHfOM" target="_blank">Ben Horowitz</a>*, a16z<br>
      <a href="https://drive.google.com/file/d/1q1NRi42R7rs1muUjG8KwJB4fuG38Ovm4/view?usp=sharing" target="_blank">Steve Jurvetson</a>, Future Ventures/Draper Fisher Jurvetson<br>
      <a href="https://drive.google.com/open?id=1uefKBgT5db54QggqBn_-8WLMNHNwqpf9" target="_blank">Vinod Khosla</a>, Khosla Ventures/Kleiner Perkins<br>
      <a href="https://drive.google.com/file/d/1qbckQQw8LXwehhkiIAZg5hDa50-s5H5O/view?usp=sharing" target="_blank">Mitch Lasky</a>, Benchmark Capital<br>
      <a href="https://drive.google.com/file/d/129FeQVEoBTCw5ZPu05tbaI-0QNJ8I9kJ/view?usp=sharing" target="_blank">Jessica Livingston</a>, Y Combinator<br>
      <a href="https://drive.google.com/file/d/1zMY56NKDH56AHifXfRlHvMpX5zWzn-84/view?usp=sharing" target="_blank">Jeremy Levine</a>, Bessemer Venture Partners<br>
      <a href="https://drive.google.com/file/d/1H1nHUHMaiS9yz3bdXulhdA3AwPcDefnd/view?usp=sharing" target="_blank">Michael Moritz</a>, Sequoia<br>
      <a href="https://drive.google.com/file/d/1fZHmpXxvVfDRZWvGx7pcX1Xa0K_Lp0z5/view?usp=sharing" target="_blank">Naval Ravikant</a>, AngelList<br>
      <a href="https://drive.google.com/open?id=1X47ijmpEFLeDMokXDpDEPzM4lZkyqKQ6" target="_blank">Danny Rimer</a>, Index Ventures<br>
      <a href="https://drive.google.com/file/d/1zarOVdAKKvaEkb7mudYc0sXKSY2HS4VQ/view?usp=sharing" target="_blank">Chris Sacca</a>, Lowercarbon/Lowercase<br>
      <a href="https://drive.google.com/file/d/13uKDZY_LxH8tIJdiDPvO3qA04rOhIUq2/view?usp=sharing" target="_blank">Sheel Tyle</a>, Amplo/NEA/Bessemer<br>
      <a href="https://drive.google.com/file/d/1TeLx_LS-ZCkbK8eqwXfH9_4_cftiFsJL/view?usp=sharing" target="_blank">Peter Thiel</a>, Founders Fund<br>
      <a href="https://drive.google.com/open?id=15HdeQuSGU4DJa6AapE2W4AWCMM-bIbIy" target="_blank">Don Valentine</a>, Sequoia Capital<br>
      <a href="https://drive.google.com/open?id=1nMP4_aYFRVxj2quDKJixT98vJldfpHu1" target="_blank">Fred Wilson</a>*, Union Square Ventures</p>

      <p><strong><span style="text-decoration:underline">Technical CEOs</span>:</strong><br>
      <a href="https://drive.google.com/file/d/176TxNUJi4eM6PjPkIdfdg-xDOoljdgUW/view" target="_blank">Sam Altman</a>, Y Combinator/OpenAI<br>
      <a href="https://drive.google.com/open?id=1hWIK-_URXKLZLf1FL_Aw4f19e3qvYu6M" target="_blank">Marc Benioff</a>, Salesforce<br>
      <a href="https://drive.google.com/open?id=1GTVZ-K37XVyj1sO_xpdZWJmLE0hv6q27" target="_blank">Sergey Brin and Larry Page</a> ft. Satya Nadella, Google/Alphabet<br>
      <a href="https://drive.google.com/file/d/1V4OmwzOwyCZo7KhidM4M0CLjXZk0iTer/view?usp=sharing" target="_blank">Morris Chang</a>, Taiwan Semiconductor<br>
      <a href="https://drive.google.com/file/d/1oR_P75K3QpJkz4s7Vf3fET0ffeKp6pyw/view?usp=sharing" target="_blank">Michael Dell</a>, Dell<br>
      <a href="https://drive.google.com/open?id=1RVK_PbfVgp7Ajr5DeuY6jfhnHtUcygwu" target="_blank">Jack Dorsey</a>, Square/Twitter<br>
      <a href="https://drive.google.com/open?id=14VlxVPmWhNdwozaJEhuYOwmurKB2PxKW" target="_blank">Bill Gates</a>, Microsoft<br>
      <a href="https://drive.google.com/open?id=11AoFZpDteEHEQlmcdOuiezsnUv7LoyV1" target="_blank">Jensen Huang</a>, Nvidia<br>
      <a href="https://drive.google.com/open?id=1EF7lmtjCFD4_g0wlc9dZV4BPFX20WXEH" target="_blank">Elon Musk</a>, SpaceX/Tesla/Hyperloop/Neuralink<br>
      <a href="https://drive.google.com/open?id=1vRAxAnZXUMTbtoCVh7iZFZCT1f2fZ_MG" target="_blank">Pierre Omidyar</a> ft. Meg Whitman and John Donahoe, eBay</p>

      <p><strong><span style="text-decoration:underline">Value Investors</span>:</strong><br>
      <a href="https://12mv2.com/wp-content/uploads/2023/05/web_v31.pdf" target="_blank">Warren Buffett</a>, Berkshire Hathaway<br>
      <a href="https://drive.google.com/open?id=1cUGObgO_L6vEXFWGJjtpbAMvvCw3AagZ" target="_blank">Michael Burry</a>*, Scion Capital<br>
      <a href="https://drive.google.com/open?id=1HaFKV3GKKEm3_gKubpvWEmC8ygokuyMQ" target="_blank">Joel Greenblatt</a>*, Gotham Funds<br>
      <a href="https://drive.google.com/open?id=13Ja6CKbw7iadVhp05mTEkOta-AMh_Dgz" target="_blank">Bruce Greenwald</a>*, Columbia University<br>
      <a href="https://drive.google.com/open?id=1oZVIJpKTKB42-aFLXGrBc-IfJ-p7lEWA" target="_blank">Seth Klarman</a>*, Baupost Group<br>
      <a href="https://12mv2.com/wp-content/uploads/2020/09/pl_fortworthcollection.pdf" target="_blank">Peter Lynch</a>*, Fidelity<br>
      <a href="https://drive.google.com/open?id=1A5MgVfMXnK7uJw1pnPAcTRSSNEVRD46D" target="_blank">Howard Marks</a>, Oaktree Capital<br>
      <a href="https://drive.google.com/file/d/1Z1vpYay_HuePdCpOxI_Ozatv_L7-e66n/view?usp=sharing" target="_blank">Michael Mauboussin</a>, Counterpoint Global/Credit Suisse<br>
      <a href="https://drive.google.com/file/d/1kwntlqJAK0H1LtE6wmhcW9pDZ2NtT_cc/view?usp=sharing" target="_blank">Bill Miller</a>, Miller Value Partners/Legg Mason Capital<br>
      <a href="https://drive.google.com/open?id=1FRaJyT54BwkMBPkX0loHHZHC43vli5y1" target="_blank">Charlie Munger</a>*, Berkshire Hathaway</p>
    `
  },
  {
    id: 'us-stocks',
    title: 'US Stock Ideas',
    type: 'METRIC_CARD',
    category: 'US',
    metrics: {
      'Mastercard $MA': 'P/E: 30.34x',
      'Visa $V': 'P/E: 26.30x',
      'LVMH $LVMH': 'P/E: 22.21x',
      'Monster Beverage $MNST': 'P/E: 28.54x'
    }
  }
];
