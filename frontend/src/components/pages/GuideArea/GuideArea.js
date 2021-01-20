import { Button } from "@material-ui/core";
import "./GuideArea.css";

const GuideArea = () => {
  return (
    <div id="why-turkey" className="guidearea">
      <div className="text-button">
        <div className="guidearea-texts">
          <h2>Beatiful and Affordable Paradise</h2>
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
    </div>
  );
};

export default GuideArea;
