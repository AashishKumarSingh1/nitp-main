import { 
  Bookmark,
  CircleDollarSign,
  Calendar,
  UserSquare,
  Building2,
  Clock,
  CheckCircle2,
  Loader2
} from "lucide-react";

function formatDate(dateString) {
  if (!dateString) return "Present";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short", 
      year: "numeric"
    });
  } catch {
    return "Present";
  }
}

export const ProjectCard = ({
  project_title,
  facultyName,
  sponsor, 
  amount,
  start,
  end,
}) => {
  const isOngoing = end && new Date(end) > new Date();

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <Bookmark className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
          {project_title && (
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-red-700 transition-colors line-clamp-2">
              {project_title}
            </h3>
          )}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full flex items-center ${
          isOngoing 
            ? "bg-green-50 text-green-800 border border-green-200" 
            : "bg-blue-50 text-blue-800 border border-blue-200"
        }`}>
          {isOngoing ? (
            <>
              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
              Ongoing
            </>
          ) : (
            <>
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Completed
            </>
          )}
        </span>
      </div>
      <div className="space-y-2.5 text-sm">
        {facultyName && (
          <div className="flex items-start">
            <UserSquare className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Principal Investigator</p>
              <p className="text-gray-700">{facultyName}</p>
            </div>
          </div>
        )}

        {sponsor && (
          <div className="flex items-start">
            <Building2 className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Funding Agency</p>
              <p className="text-gray-700">{sponsor}</p>
            </div>
          </div>
        )}

        {amount && (
          <div className="flex items-start">
            <CircleDollarSign className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Grant Amount</p>
              <p className="text-gray-700">{amount}</p>
            </div>
          </div>
        )}

        {(start || end) && (
          <div className="flex items-start">
            <Calendar className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Project Duration</p>
              <p className="text-gray-700">
                {formatDate(start)} - {formatDate(end)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};