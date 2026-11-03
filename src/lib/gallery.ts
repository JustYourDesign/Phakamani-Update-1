/* --------------------------------------------------------------------------
   Gallery
   Two separate collections: the schools Phakamani has run programmes in, and
   the activations — public events, which are a different kind of work and
   are kept apart from the school photography on purpose.

   To add photographs: drop the files into the folder named by `folder` and
   list the filenames in `photos`. The grid and counts follow from the array.
   An empty `photos` array renders a "coming soon" panel instead of a broken
   grid, so an entry can go in before its shoot lands.
   -------------------------------------------------------------------------- */

export type GalleryPhoto = {
  /** Filename inside the entry's folder. */
  file: string;
  /** Short alt text. Keep it factual — these are real learners. */
  alt: string;
};

export type GalleryEntry = {
  id: string;
  /** Path under public/photos/ */
  folder: string;
  name: string;
  /** What this is — one or two lines, no marketing. */
  blurb: string;
  /** Small facts rendered as a hairline-separated row. */
  meta: readonly { label: string; value: string }[];
  photos: readonly GalleryPhoto[];
};

export const schools: readonly GalleryEntry[] = [
  {
    id: "shoba-high-school",
    folder: "schools/shoba-high-school",
    name: "Shoba High School",
    blurb:
      "A session that moves between the classroom and the field — the feelings zones and box breathing on the board in the morning, then the same ideas put to work outside in the afternoon.",
    meta: [
      { label: "Programme", value: "Student resilience" },
      { label: "Format", value: "Classroom & field" },
      { label: "Year", value: "2026" },
    ],
    photos: [
      {
        file: "field-huddle.webp",
        alt: "A Phakamani facilitator talking to a line of learners on a school field, hills behind them",
      },
      {
        file: "circle-session.webp",
        alt: "Learners seated in a circle around the edge of a classroom during a session",
      },
      {
        file: "feelings-zones.webp",
        alt: "A facilitator putting the feelings-zones posters up on the classroom board",
      },
      {
        file: "hoop-activity.webp",
        alt: "Learners holding hoops in a line while a classmate steps through them",
      },
      {
        file: "school-sign.webp",
        alt: "The Shoba High School board showing the matric exam countdown",
      },
    ],
  },
  {
    id: "phillip-mtywaku",
    folder: "schools/phillip-mtywaku",
    name: "Phillip Mtywaku Senior Secondary School",
    blurb:
      "Work with senior learners on naming what they feel and deciding what to do about it — the problem, what I feel, what can I do, better outcome sequence, and the dreams board that follows it.",
    meta: [
      { label: "Programme", value: "Confidence and leadership" },
      { label: "Format", value: "Classroom" },
      { label: "Year", value: "2026" },
    ],
    photos: [
      {
        file: "facilitator.webp",
        alt: "A Phakamani facilitator smiling at the front of a classroom beside the session posters",
      },
      {
        file: "classroom.webp",
        alt: "Learners at wooden desks with hands raised during a session",
      },
      {
        file: "box-breathing.webp",
        alt: "A facilitator at the board pointing to the box breathing poster",
      },
      {
        file: "my-dreams.webp",
        alt: "A learner placing a counter on the My Dreams board",
      },
      {
        file: "school-sign.webp",
        alt: "The painted Phillip Mtywaku Senior Secondary School sign on the school building",
      },
    ],
  },
] as const;

/* --------------------------------------------------------------------------
   Activations — public events, kept separate from the schools.
   -------------------------------------------------------------------------- */

export const activations: readonly GalleryEntry[] = [
  {
    id: "mzansi-speedway",
    folder: "activations/mzansi-speedway",
    name: "Mzansi Speedway",
    blurb:
      "A day at the track — the start line, the paddock and the drift pad. Preparation, control and the moment of commitment are the same whether the start line is a race or a classroom.",
    meta: [
      { label: "Type", value: "Event activation" },
      { label: "Venue", value: "Mzansi Speedway" },
      { label: "Year", value: "2026" },
    ],
    photos: [
      {
        file: "aerial.webp",
        alt: "An aerial view of the Mzansi Speedway start line with cars queued along the track",
      },
      {
        file: "mclaren.webp",
        alt: "A light blue McLaren with its door raised in the trackside line-up",
      },
      {
        file: "porsche.webp",
        alt: "A black Porsche GT2 RS parked under the trackside canopy with spectators beside it",
      },
      {
        file: "bmw-m3.webp",
        alt: "A blue BMW M3 at the start line with spectators watching from the side",
      },
      {
        file: "drift-helicopter.webp",
        alt: "A helicopter hovering above a yellow drift car on the skid pad",
      },
      {
        file: "drift-car.webp",
        alt: "A yellow drift car on the apron with a helicopter passing low overhead",
      },
    ],
  },
] as const;

export function galleryPhotoSrc(entry: GalleryEntry, photo: GalleryPhoto) {
  return `/photos/${entry.folder}/${photo.file}`;
}
