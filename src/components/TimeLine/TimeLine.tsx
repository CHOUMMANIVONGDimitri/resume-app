import React from "react";
import { Moment } from "moment";
import { Timeline, Button } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

interface DataTimeLine {
  date: Moment;
  title: string;
  body: string;
  path?: string;
  icon?: React.SVGProps<SVGElement>;
}

interface TimeLineProps {
  datas: DataTimeLine[];
}

const TimeLineCustom: React.FC<TimeLineProps> = ({ datas }) =>
  datas?.length > 0 &&
  datas.map((data) => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={data?.icon || HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>{`${data.date.format("MMMM YYYY")}`}</Timeline.Time>
          <Timeline.Title>{data.title}</Timeline.Title>
          <Timeline.Body>{data.body}</Timeline.Body>
          {data?.path && (
            <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          )}
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ));

export default TimeLineCustom;
