import { Button } from "@material-ui/core";
import "./GuideArea.css";

const GuideArea = () => {
  return (
    <div id="why-turkey" className="guidearea">
      <div className="guidearea-texts">
        <h1>Beatiful and Affordable Paradise</h1>
        <p>
          Discover where nature meets the sea and turn into your next peaceful
          residency.
        </p>
      </div>
      <div className="guide-buttons">
        <Button variant="contained" color="primary">
          Bodrum
        </Button>
        <Button variant="contained" color="primary">
          Fethiye
        </Button>
        <Button variant="contained" color="primary">
          Antalya
        </Button>
      </div>
    </div>
  );
};

export default GuideArea;
