import { Route } from "react-router-dom";
import { useParams, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comment from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_DATA = [
  { id: "q1", name: "Yash", text: "Learning react is fun!" },
  { id: "q2", name: "Yash Saini", text: "Learning react is great!" },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <section>
      <h1>Quote Detail page</h1>
      <HighlightedQuote text={quote.text} author={quote.name} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/:quoteId/comments`}>
        <Comment />
      </Route>
    </section>
  );
};

export default QuoteDetails;
