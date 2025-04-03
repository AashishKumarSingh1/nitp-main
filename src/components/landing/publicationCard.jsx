import {
  BookOpenText,
  Users,
  CalendarDays,
  Bookmark,
  Link2,
  LibraryBig,
  ScrollText
} from "lucide-react";

export const PublicationCard = ({
  year,
  authors,
  journalName,
  title,
  journalQuartile,
  volume,
  doi,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 group">
      <div className="flex justify-between items-start gap-3 mb-3">
        <div className="flex items-start">
          <BookOpenText className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
          {title && (
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-2">
              {title}
            </h3>
          )}
        </div>
        {journalQuartile && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center ${
            journalQuartile === 'Q1' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 
            journalQuartile === 'Q2' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
            'bg-gray-50 text-gray-800 border border-gray-200'
          }`}>
            {journalQuartile === 'Q1' ? (
              <Bookmark className="h-3 w-3 mr-1 text-emerald-600" />
            ) : journalQuartile === 'Q2' ? (
              <Bookmark className="h-3 w-3 mr-1 text-blue-600" />
            ) : (
              <Bookmark className="h-3 w-3 mr-1 text-gray-600" />
            )}
            {journalQuartile}
          </span>
        )}
      </div>
      {authors && (
        <div className="flex items-start mb-3">
          <Users className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Authors</p>
            <p className="text-xs text-gray-700 line-clamp-2">{authors}</p>
          </div>
        </div>
      )}
      {journalName && (
        <div className="flex items-start mb-3">
          <LibraryBig className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Journal</p>
            <p className="text-xs text-gray-700 line-clamp-1">{journalName}</p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          {volume && (
            <div className="flex items-center text-xs text-gray-600">
              <ScrollText className="h-3 w-3 mr-1 text-gray-500" />
              <span>Vol. {volume}</span>
            </div>
          )}
          {year && (
            <div className="flex items-center text-xs text-gray-600">
              <CalendarDays className="h-3 w-3 mr-1 text-gray-500" />
              <span>{year}</span>
            </div>
          )}
        </div>
        
        {doi && (
          <a 
            href={`https://doi.org/${doi}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-blue-600 hover:text-blue-800 flex items-center transition-colors"
          >
            <Link2 className="h-3 w-3 mr-1" />
            DOI
          </a>
        )}
      </div>
    </div>
  );
};