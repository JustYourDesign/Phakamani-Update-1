# School gallery photographs

One folder per school, named to match the `folder` field in
`src/lib/gallery.ts`. Drop the image files in here, then list the filenames
in that school's `photos` array — the grid, ordering and counts all follow
from it. A school whose `photos` array is empty renders a "coming soon"
panel instead of a broken grid.

Format: WebP, longest edge 2000px. To convert and downscale a folder of
JPEGs in place:

    node scripts/optimise-photos.mjs public/photos/schools/school-one

The first photo in each array renders double-width on desktop, so put the
strongest wide shot first.

The first tile spans 2x2 on desktop over a 4-column grid, so a count of
5, 9 or 13 fills the block exactly with no ragged last row.
