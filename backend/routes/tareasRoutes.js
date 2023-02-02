const express = require('express')
const router = express.Router()
const { getTareas, setTareas, updateTarea, deleteTarea } = require('../controllers/tareaController')

router.route('/').get(getTareas).post(setTareas)
router.route('/:id').delete(deleteTarea).put(updateTarea)

// router.get('/', getTareas)
// router.post('/', setTareas)
// router.put('/:id', updateTarea)
// router.delete('/:id', deleteTarea)

module.exports = router