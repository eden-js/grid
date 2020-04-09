
// import dependencies
import Model from 'model';

/**
 * create user class
 */
export default class Grid extends Model {
  /**
   * sanitises placement
   *
   * @return {Promise}
   */
  async sanitise() {
    // return placement
    return {
      id : this.get('_id') ? this.get('_id').toString() : null,
    };
  }
}